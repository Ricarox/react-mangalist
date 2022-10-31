
import { TableBody, TableCell, IconButton, TableRow } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector,  } from 'react-redux';
import { startLastView } from '../../store/slice/auth/thunks';
import { loadMangasFavoriteSelect } from '../../helpers/loadMangasFavoriteSelect';



export const MangaChapters = (i) => {

 
    
    const dispatch = useDispatch();
    
    
    const onB = () => {
        dispatch(startLastView(i.chapters))
    }
    
    if (i.idc < 2) {
        
        loadMangasFavoriteSelect(i.mangaId)
    }
 
    


    return (
        <>

            <TableBody>

                <TableRow
                    key={i.idc}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        <b>chapters: {i.chapters} </b>
                    </TableCell>


                <TableCell align="right">
                    <IconButton onClick={onB} >

                        <VisibilityIcon sx={{ fontSize: 30 }} color={i.lastView ? 'primary' : ''} />

                    </IconButton>
                </TableCell>
                </TableRow>


            </TableBody>



        </>

    )
}
