import { useForm } from "react-hook-form";
import { LoginFormInput, loginSchema } from "../schema/login-schema";
import { useAppDispatch } from "../../../store/hooks/global-hook";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../store/auth/auth-slice";
import { apiV1 } from "../../../utils/api";
import { LoginRequestDTO, LoginResponseDTO } from "../dto/login-dto";
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from "js-cookie";
import { AxiosError } from "axios";

export function useLoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInput>({
        resolver: zodResolver(loginSchema),
    });
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    async function onSubmit(data: LoginFormInput) {
        try {
            const res = await apiV1.post<null, { data: LoginResponseDTO }, LoginRequestDTO>("/auth/login", data);
            const { user, token } = res.data;
            console.log("ini token", token);
            
            dispatch(setUser(user));
            Cookies.set("token", token, { expires: 1 });
            navigate("/");
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                console.error("Login error:", axiosError.response.data);
            } else {
                console.error("Unexpected error:", axiosError.message);
            }
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
    };
}