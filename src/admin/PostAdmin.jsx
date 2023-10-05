import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button } from 'react-bootstrap';
import { deletePost } from '../services/allapis';
import toast, { Toaster } from 'react-hot-toast';
import spinner from '../images/spinner.gif'

function PostAdmin({ post, loading }) {

    function manageDelete(params) {
        console.log(params);
    }

    return (
        <div >
            {
                loading ? (
                    <div className='flex justify-center items-center'> 
                        <img src={spinner} alt="" />
                    </div>

                ) : (
                    <div className='grid grid-cols-4 gap-3  bg-slate-200 p-9'>
                        {
                            post?.map(posts => (
                                <Card sx={{ height: '230px' }} className='w-50%'>
                                    <CardActionArea>
                                        <CardMedia className='h-40'
                                            component="img"
                                            image={posts.image}
                                            alt="green iguana"
                                        />
                                        <CardContent className=' flex justify-between items-center'>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {posts.heading}
                                            </Typography>
                                            <button onClick={manageDelete} className=' flex justify-center items-center h-8 hover:bg-red-500 w-20 rounded-lg bg-gray-800 text-white'>Delete </button>
                                        </CardContent>

                                    </CardActionArea>
                                </Card>

                            ))
                        }
                    </div>


                )
            }

            <Toaster />
        </div>
    )
}

export default PostAdmin