import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { CreateProductFormInput, productSchema } from "../schemas/product-schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiV1 } from "../../../utils/api";
import { ProductEntity } from "../../../entities/product-entity";
import Cookies from "js-cookie"
import { CreateProductDTO } from "../dto/product-dto";

export const useProduct = () => {
    async function getProduct() {
        const res = await apiV1.get<null, { data: ProductEntity[] }>(
            '/product/get-all'
        )
        return res.data
    }

    const { data, isLoading } = useQuery<ProductEntity[], null, ProductEntity[]>({
        queryKey: ['product'],
        queryFn: getProduct
    });

    return {
        data,
        isLoading,
    }
}

export const useProductCreate = (categoryId: number) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
        reset,
        setValue
    } = useForm<CreateProductFormInput>({
        resolver: zodResolver(productSchema),
    });
    const queryClient = useQueryClient();

    async function createProduct(data: CreateProductDTO) {
        const formData = new FormData();
        formData.append('productName', data.productName ?? '');
        formData.append('productDesc', data.productDesc ?? '');
        formData.append('price', String(data.price));
        formData.append('qty', String(data.qty));
        if (data.image && data.image.length > 0) {
            formData.append('image', data.image[0]);
        }
        const res = await apiV1.post<null, { data: ProductEntity }>(`/product/create/${categoryId}`, formData, {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
                'Content-Type': 'multipart/form-data'
            }
        })

        queryClient.invalidateQueries({ queryKey: ['product'] })
        return res.data
    }

    const { mutateAsync: createProductAsync } = useMutation<
        ProductEntity,
        Error,
        CreateProductDTO>({
            mutationKey: ['createProduct'],
            mutationFn: createProduct,
        })

    async function onSubmit(data: CreateProductFormInput) {
        console.log("onsubmit");

        const productData: CreateProductDTO = {
            productName: data.productName,
            productDesc: data.productDesc,
            price: Number(data.price),
            qty: Number(data.qty),
            image: data.image
        }
        try {
            await createProductAsync(productData);
            queryClient.invalidateQueries({ queryKey: ['product'] })
            reset();
        } catch (error) {

        }
    }

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        isLoading,
        setValue
    }
}