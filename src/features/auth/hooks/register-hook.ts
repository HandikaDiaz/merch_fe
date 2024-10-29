import { useForm } from "react-hook-form";
import { RegisterFormInput, registerSchema } from "../schema/register-schema";
import { useAppDispatch } from "../../../store/hooks/global-hook";
import { useNavigate } from "react-router-dom";
import { apiV1 } from "../../../utils/api";
import { RegisterResponseDTO } from "../dto/register-dto";
import { setUser } from "../../../store/auth/auth-slice";
import Cookies from "js-cookie";
import { zodResolver } from "@hookform/resolvers/zod";

export function useRegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormInput>({
        resolver: zodResolver(registerSchema),
    });
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    async function onSubmit(data: RegisterFormInput) {
        try {
            const res = await apiV1.post<RegisterResponseDTO>("/auth/register", data);
            const { user, token } = res.data;

            dispatch(setUser(user));
            Cookies.set("token", token, { expires: 1 });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
    };
}