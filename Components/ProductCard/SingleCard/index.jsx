import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import Link from 'next/link';

const SingleCard = ({ newProduct, productImg, productTitle, productPrice, href, key })=> {
    return (
        <>
            <div className='max-w-[318px] w-full flex flex-col h-full' key={key}>
                <div className='relative border-8 border-solid flex-shrink-0 border-white rounded-3xl overflow-hidden mb-4 group'>
                    <AspectRatio ratio={16 / 15} className="bg-muted">
                        <Image
                            src={productImg ? productImg : "/shoes-img2.jpg"}
                            alt="Photo by Drew Beamer"
                            fill
                            className="rounded-md object-cover group-hover:scale-110 transition-all duration-300 ease-linear"
                        />
                    </AspectRatio>
                    {newProduct === true ? <div className='py-3 px-4 absolute top-0 left-0 bg-[#4A69E2] text-white text-xs font-semibold rounded-tl-3xl rounded-br-3xl'>New</div> : ""}
                </div>
                <h3 className='flex-shrink-0 flex-grow line-ellips-2 uppercase text-[#232321] font-bold text-xl leading-snug mb-4'>{productTitle}</h3>
                <Link href={href ? href : '#'} className='text-white flex-shrink-0 text-sm font-medium p-4 border border-solid border-[#232321] bg-[#232321] rounded-xl text-center block'>View Product - <span className='text-[#FFA52F] font-medium'>{productPrice}</span></Link>
            </div>
        </>
    )
}
export default SingleCard;