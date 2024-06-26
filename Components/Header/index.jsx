
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#FAFAFA] p-8 rounded-3xl'>
      <div className="container">
        <div className='flex items-center justify-between'>
          <ul className='flex items-center gap-10'>
            <li>
              <Link href={'/'} className='font-semibold text-base text-[#232321]'>New Drops 🔥</Link>
            </li>
            <li>
              <Link href={'/'} className='font-semibold text-base text-[#232321]'>Men</Link>
            </li>
            <li>
              <Link href={'/'} className='font-semibold text-base text-[#232321]'>Women</Link>
            </li>
          </ul>
          <div>
            <Image src={'/logo.svg'} width={128} height={32} alt='logo' />
          </div>
          <ul className='flex items-center gap-10'>
            <li>
              <button className='bg-transparent border-none outline-none'>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8109 17.8851L19.7987 17.9014L19.8131 17.9158L24.9582 23.0609C25.1868 23.3168 25.3088 23.6505 25.2992 23.9935C25.2896 24.3368 25.1489 24.6633 24.9061 24.9061C24.6633 25.1489 24.3368 25.2896 23.9935 25.2992C23.6505 25.3088 23.3168 25.1868 23.0609 24.9582L17.9158 19.8131L17.9014 19.7987L17.8851 19.8109C16.24 21.0467 14.2376 21.7138 12.18 21.7116C6.92435 21.7116 2.64844 17.4356 2.64844 12.18C2.64844 6.92435 6.92435 2.64844 12.18 2.64844C17.4356 2.64844 21.7116 6.92435 21.7116 12.18C21.7138 14.2376 21.0467 16.24 19.8109 17.8851ZM5.33156 12.18V12.18C5.33374 13.9957 6.05597 15.7363 7.33982 17.0202C8.62368 18.304 10.3643 19.0263 12.18 19.0284C13.5345 19.0284 14.8586 18.6268 15.9848 17.8743C17.111 17.1218 17.9888 16.0522 18.5071 14.8008C19.0255 13.5494 19.1611 12.1724 18.8968 10.8439C18.6326 9.51547 17.9803 8.29519 17.0226 7.33742C16.0648 6.37965 14.8445 5.7274 13.5161 5.46315C12.1876 5.1989 10.8106 5.33453 9.55922 5.85287C8.30783 6.37121 7.23825 7.24899 6.48573 8.37521C5.73322 9.50143 5.33156 10.8255 5.33156 12.18Z" fill="#232321" stroke="#232321" strokeWidth="0.046875" />
                </svg>
              </button>
            </li>
            <li>
              <Link href={'/login'} className='bg-transparent border-none outline-none block'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.2506 22.4766H20.2503L3.75027 22.4766L3.74996 22.4766C3.53748 22.4793 3.32705 22.4347 3.13398 22.3459C2.94092 22.2571 2.77008 22.1264 2.63388 21.9633L2.63387 21.9632C2.33401 21.6048 2.21259 21.1146 2.30239 20.6179L2.3024 20.6179C2.69683 18.4298 3.92767 16.5916 5.86327 15.3008C7.58316 14.1546 9.76246 13.5234 12.0003 13.5234C14.2381 13.5234 16.4174 14.1551 18.1373 15.3008C20.0729 16.5912 21.3037 18.4293 21.6981 20.6174C21.7879 21.1142 21.6665 21.6043 21.3667 21.9628L21.3666 21.9628C21.2305 22.126 21.0597 22.2568 20.8666 22.3457C20.6735 22.4346 20.4631 22.4793 20.2506 22.4766ZM12.0003 1.52344C13.4003 1.52344 14.668 2.0633 15.5756 3.04311C16.4943 4.03505 16.9424 5.37056 16.8364 6.80358C16.6257 9.65898 14.4568 11.9766 12.0003 11.9766C9.54369 11.9766 7.3711 9.65849 7.16364 6.80268C7.05907 5.3564 7.50444 4.01811 8.41745 3.03375C9.3207 2.06009 10.5926 1.52344 12.0003 1.52344Z" fill="#232321" stroke="#232321" strokeWidth="0.046875" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href={'/'} className='rounded-full bg-[#FFA52F] text-[#232321] text-base font-semibold w-8 h-8 flex items-center justify-center'>0</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header