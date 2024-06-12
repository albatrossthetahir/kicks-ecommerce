
import Link from 'next/link'
import React from 'react'



const Header = () => {
  return (
    <header className='bg-[#FAFAFA] p-8 rounded-3xl'>
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
          <svg width="128" height="32" viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.1178 31.9998C31.7937 31.9998 31.5139 31.8813 31.2783 31.6442C31.0426 31.4072 30.9248 31.1257 30.9248 30.7998V2.08867C30.9248 1.76275 31.0426 1.48126 31.2783 1.24423C31.5139 1.00719 31.7937 0.888672 32.1178 0.888672H41.1312C41.4552 0.888672 41.7351 1.00719 41.9707 1.24423C42.2064 1.48126 42.3242 1.76275 42.3242 2.08867V30.7998C42.3242 31.1257 42.2064 31.4072 41.9707 31.6442C41.7351 31.8813 41.4552 31.9998 41.1312 31.9998H32.1178Z" fill="#232321" />
            <path d="M1.19296 31.5554C0.868945 31.5554 0.589115 31.4369 0.353469 31.1999C0.117823 30.9629 0 30.6814 0 30.3554V1.64434C0 1.31841 0.117823 1.03693 0.353469 0.799892C0.589115 0.562854 0.868945 0.444336 1.19296 0.444336H9.63203C9.95605 0.444336 10.2359 0.562854 10.4715 0.799892C10.7072 1.03693 10.825 1.31841 10.825 1.64434V10.4443L15.8177 1.42211C15.965 1.18508 16.1761 0.962854 16.4609 0.755447C16.7407 0.54804 17.1138 0.444336 17.5851 0.444336H27.3497C27.6148 0.444336 27.8406 0.543101 28.037 0.730756C28.2284 0.923348 28.3217 1.15051 28.3217 1.42211C28.3217 1.59989 28.2775 1.76285 28.1892 1.911L20.2361 15.3332L28.9403 30.0888C29.0286 30.2073 29.0728 30.3703 29.0728 30.5777C29.0728 30.8443 28.9746 31.0764 28.7881 31.269C28.5966 31.4616 28.3708 31.5554 28.1008 31.5554H18.0269C17.4378 31.5554 17.0009 31.4172 16.726 31.1308C16.4461 30.8493 16.2743 30.6517 16.2154 30.5332L10.825 20.8443V30.3554C10.825 30.6814 10.7072 30.9629 10.4715 31.1999C10.2359 31.4369 9.95605 31.5554 9.63203 31.5554H1.19296Z" fill="#232321" />
            <path d="M58.8232 32C55.9955 32 53.4917 31.5852 51.312 30.7556C49.1323 29.9259 47.3993 28.6222 46.118 26.8444C44.8367 25.0667 44.1346 22.7704 44.0217 19.9556C43.9923 18.7407 43.9775 17.437 43.9775 16.0444C43.9775 14.6519 43.9923 13.3185 44.0217 12.0444C44.1395 9.28889 44.8514 7.02222 46.1622 5.24444C47.473 3.46667 49.2256 2.14815 51.42 1.28889C53.6145 0.42963 56.0839 0 58.8232 0C60.7084 0 62.5248 0.217284 64.2824 0.641975C66.035 1.0716 67.6158 1.74815 69.0297 2.66667C70.4435 3.58519 71.5678 4.76543 72.4073 6.19753C73.2467 7.63457 73.6788 9.36296 73.7131 11.3778C73.7131 11.6444 73.6149 11.8765 73.4284 12.0691C73.2369 12.2617 73.0111 12.3556 72.7411 12.3556H63.7276C63.2563 12.3556 62.9078 12.2617 62.6869 12.0691C62.4659 11.8765 62.2696 11.5457 62.0928 11.0667C61.7688 10.1185 61.327 9.48148 60.7673 9.15556C60.2077 8.82963 59.5449 8.66667 58.7791 8.66667C57.807 8.66667 57.0313 8.92839 56.457 9.44691C55.8826 9.96543 55.5635 10.9086 55.5046 12.2667C55.4162 14.6963 55.4162 17.1852 55.5046 19.7333C55.5635 21.0963 55.8826 22.0395 56.457 22.5531C57.0313 23.0716 57.807 23.3333 58.7791 23.3333C59.5449 23.3333 60.2126 23.1556 60.787 22.8C61.3613 22.4444 61.7934 21.8222 62.0928 20.9333C62.2401 20.4296 62.4316 20.0889 62.6672 19.9111C62.9029 19.7333 63.2563 19.6444 63.7276 19.6444H72.7411C73.0062 19.6444 73.232 19.7432 73.4284 19.9309C73.6199 20.1235 73.7131 20.3506 73.7131 20.6222C73.6837 22.637 73.2517 24.3654 72.4073 25.8025C71.5678 27.2395 70.4435 28.4198 69.0297 29.3333C67.6158 30.2519 66.0301 30.9284 64.2824 31.3531C62.5248 31.7827 60.7084 32 58.8232 32Z" fill="#232321" />
            <path d="M99.8153 30.0888L91.1111 15.3332L99.0642 1.911C99.1525 1.76285 99.1967 1.59989 99.1967 1.42211C99.1967 1.15545 99.1034 0.928287 98.912 0.735694C98.7205 0.543101 98.4898 0.444336 98.2247 0.444336H88.4601C87.9888 0.444336 87.6157 0.54804 87.3359 0.755447C87.056 0.962854 86.84 1.18508 86.6927 1.42211L82.2744 9.4073L81.7 10.4443V1.64434C81.7 1.31841 81.5822 1.03693 81.3465 0.799892C81.1109 0.562854 80.831 0.444336 80.507 0.444336H72.068C71.7439 0.444336 71.4641 0.562854 71.2285 0.799892C71.199 0.834459 71.1696 0.864089 71.1401 0.898657C71.1107 0.933225 71.0861 0.967793 71.0665 1.00236C71.0419 1.03693 71.0223 1.07643 71.0026 1.111C70.983 1.15051 70.9683 1.18508 70.9536 1.22458C72.4754 2.27643 73.7224 3.60977 74.6502 5.19989C75.6567 6.92829 76.1869 8.99742 76.2212 11.348C76.2212 12.1629 75.9168 12.9036 75.3621 13.4666C74.8024 14.0246 74.066 14.3308 73.2855 14.3308H70.875V17.669H73.2855C74.066 17.669 74.8024 17.9752 75.3572 18.5332C75.9168 19.1011 76.2212 19.8419 76.2212 20.6221C76.1869 23.0024 75.6567 25.0715 74.6502 26.7999C73.7224 28.39 72.4754 29.7233 70.9536 30.7752C70.9683 30.8147 70.983 30.8542 71.0026 30.8888C71.0419 30.9629 71.0861 31.0369 71.1401 31.1011C71.1696 31.1357 71.199 31.1653 71.2285 31.1999C71.4641 31.4369 71.7439 31.5554 72.068 31.5554H80.507C80.831 31.5554 81.1109 31.4369 81.3465 31.1999C81.5822 30.9629 81.7 30.6814 81.7 30.3554V20.8443L82.2744 21.8764L87.0904 30.5332C87.1493 30.6517 87.3211 30.8542 87.601 31.1357C87.8808 31.4172 88.3128 31.5554 88.9019 31.5554H98.9758C99.2409 31.5554 99.4716 31.4616 99.6631 31.269C99.8546 31.0764 99.9478 30.8443 99.9478 30.5777C99.9478 30.3703 99.9037 30.2073 99.8153 30.0888Z" fill="#232321" />
            <path d="M113.331 32C110.062 32 107.367 31.5556 105.246 30.6667C103.125 29.7778 101.534 28.6074 100.474 27.1556C99.4135 25.7037 98.8538 24.163 98.7949 22.5333C98.7949 22.2667 98.8882 22.0395 99.0797 21.842C99.2711 21.6494 99.497 21.5556 99.7621 21.5556H108.157C108.628 21.5556 108.987 21.6198 109.242 21.7531C109.492 21.8864 109.762 22.0741 110.062 22.3062C110.356 22.5136 110.656 22.7012 110.965 22.8593C111.274 23.0222 111.628 23.1407 112.025 23.2148C112.423 23.2889 112.855 23.3284 113.331 23.3284C114.333 23.3284 115.133 23.2148 115.737 22.9926C116.341 22.7704 116.645 22.4691 116.645 22.084C116.645 21.7284 116.473 21.4321 116.135 21.1951C115.796 20.958 115.212 20.7457 114.387 20.5531C113.562 20.3605 112.413 20.1728 110.941 20C108.614 19.6741 106.596 19.1259 104.887 18.3556C103.179 17.5852 101.858 16.5284 100.935 15.1753C100.008 13.8272 99.546 12.1728 99.546 10.2173C99.546 8.20247 100.111 6.42469 101.245 4.88395C102.379 3.34321 103.955 2.14321 105.972 1.28395C107.99 0.42963 110.342 0 113.022 0C115.231 0 117.19 0.28642 118.898 0.864197C120.607 1.44198 122.05 2.19753 123.228 3.13086C124.407 4.0642 125.305 5.06667 125.924 6.13333C126.542 7.2 126.866 8.22222 126.896 9.2C126.896 9.46667 126.798 9.69876 126.611 9.89136C126.42 10.084 126.204 10.1778 125.968 10.1778H117.131C116.719 10.1778 116.385 10.1185 116.139 10C115.889 9.88148 115.629 9.7037 115.364 9.46667C115.217 9.31852 114.942 9.15062 114.544 8.95309C114.146 8.76049 113.641 8.66667 113.017 8.66667C112.281 8.66667 111.741 8.78025 111.407 9.00247C111.068 9.22469 110.896 9.53086 110.896 9.91111C110.896 10.1778 111.029 10.4296 111.294 10.6667C111.559 10.9037 112.045 11.1111 112.752 11.2889C113.459 11.4667 114.475 11.6444 115.801 11.8222C118.746 12.1778 121.108 12.7506 122.895 13.5309C124.677 14.316 125.973 15.363 126.783 16.6667C127.593 17.9704 128 19.5852 128 21.5111C128 23.6741 127.357 25.5407 126.076 27.1111C124.795 28.6815 123.047 29.8864 120.838 30.7309C118.628 31.5753 116.13 32 113.331 32Z" fill="#232321" />
          </svg>
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
            <button className='bg-transparent border-none outline-none'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2506 22.4766H20.2503L3.75027 22.4766L3.74996 22.4766C3.53748 22.4793 3.32705 22.4347 3.13398 22.3459C2.94092 22.2571 2.77008 22.1264 2.63388 21.9633L2.63387 21.9632C2.33401 21.6048 2.21259 21.1146 2.30239 20.6179L2.3024 20.6179C2.69683 18.4298 3.92767 16.5916 5.86327 15.3008C7.58316 14.1546 9.76246 13.5234 12.0003 13.5234C14.2381 13.5234 16.4174 14.1551 18.1373 15.3008C20.0729 16.5912 21.3037 18.4293 21.6981 20.6174C21.7879 21.1142 21.6665 21.6043 21.3667 21.9628L21.3666 21.9628C21.2305 22.126 21.0597 22.2568 20.8666 22.3457C20.6735 22.4346 20.4631 22.4793 20.2506 22.4766ZM12.0003 1.52344C13.4003 1.52344 14.668 2.0633 15.5756 3.04311C16.4943 4.03505 16.9424 5.37056 16.8364 6.80358C16.6257 9.65898 14.4568 11.9766 12.0003 11.9766C9.54369 11.9766 7.3711 9.65849 7.16364 6.80268C7.05907 5.3564 7.50444 4.01811 8.41745 3.03375C9.3207 2.06009 10.5926 1.52344 12.0003 1.52344Z" fill="#232321" stroke="#232321" strokeWidth="0.046875" />
              </svg>
            </button>
          </li>
          <li>
            <Link href={'/'} className='rounded-full bg-[#FFA52F] text-[#232321] text-base font-semibold w-8 h-8 flex items-center justify-center'>0</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header