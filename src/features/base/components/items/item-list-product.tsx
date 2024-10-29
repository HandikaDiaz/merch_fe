import { styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { ButtonLink } from "../../../../components/custom-button";
import EditProductModal from "../modal/edit-product";
import DeletProductModal from "../modal/delete-product";
import { useProduct } from "../../hooks/product";

function ItemListProduct() {
    const { data } = useProduct();

    const [openEdit, setOpenEdit] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const buttonEdit = <ButtonLink onClick={handleOpenEdit} to="" sx={{ p: '5px 10%', backgroundColor: '#56c05a !important', ":hover": { backgroundColor: 'white !important', color: '#56c05a !important' } }}>Edit</ButtonLink>;
    const buttonDelete = <ButtonLink onClick={handleOpenDelete} to="" sx={{ p: '5px 5.5%' }}>Delete</ButtonLink>;

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
        }
    }));

    return (
        <>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell align="left">Photo</TableCell>
                            <TableCell align="left">Product Name</TableCell>
                            <TableCell align="left">Product Desc</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Qty</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.image.url}</StyledTableCell>
                                <StyledTableCell align="left">{row.productName}</StyledTableCell>
                                <StyledTableCell align="left">{row.productDesc}</StyledTableCell>
                                <StyledTableCell align="left">{row.price}</StyledTableCell>
                                <StyledTableCell align="left">{row.Qty}</StyledTableCell>
                                <StyledTableCell align="left" sx={{ wordSpacing: '10px' }}>{buttonEdit} {buttonDelete}</StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <EditProductModal isOpen={openEdit} onClose={handleCloseEdit} />
            <DeletProductModal isOpen={openDelete} onClose={handleCloseDelete} />
        </>
    )
}

export default ItemListProduct