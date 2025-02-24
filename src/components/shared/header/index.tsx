import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import logo from '@/../public/images/logo.svg'
import Menu from './menu';
const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className="flex justify-between">
            <div className=" flex-start">
                <Link href='/' className='flex flex-start'> 
                 <Image
                    src={logo}
                    alt={`${APP_NAME} logo`}
                    width={40}
                    height={40}
                    priority={true}/> 
                    <span className="hidden lg:block font-bold text-2xl ml-3">
                        {APP_NAME}
                    </span>
                </Link>
            </div>
              <Menu/>
        </div>
    </header>
  )
}

export default Header