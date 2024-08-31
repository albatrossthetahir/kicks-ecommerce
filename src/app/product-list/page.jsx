import { Suspense } from 'react';
import Loading from '../../../Components/Loading';
import SingleCard from '../../../Components/ProductCard/SingleCard';

const getPostsData = async () => {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/amazonproducts")
    return res.json();
}

export default async function ProductList() {
    const posts = await getPostsData();
    return (
        <>

            <Suspense fallback={<Loading />}>
                <div className="container">
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6 place-items-center'>
                        {
                            posts.map((post, i) => {
                                return <SingleCard key={i} productPrice={post.price} productTitle={post.title} />
                            })
                        }
                    </div>
                </div>
            </Suspense>
        </>
    );
}
