import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { AppWindow } from 'lucide-react';

const content=[
  {
    name:"catering",
    icon:<AppWindow className='w-16 h-16'/>,
    description:"Utilities for controlling the width of an element's borders."
  },
  {
    name:"catering",
    icon:<AppWindow />,
    description:"Utilities for controlling the width of an element's borders."
  },
  {
    name:"catering",
    icon:<AppWindow />,
    description:"Utilities for controlling the width of an element's borders."
  }
]

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className='py-20 mx-auto  flex flex-col items-center max-w-3xl'>
         <h1 className='text-4xl tracking-tight font-bold'>You Market place for high quality  <span className='text-blue-500'>digital products</span></h1>
         <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          welcome to eliod digital place ,every asset
          on my is verified and trusted</p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
             <Link href="/products" className={buttonVariants()}>TransifyButton</Link>
             <Button variant='ghost'>Our Qualty promise &rarr; </Button>
          </div>

          {/* section of products */}
          <section className='border-t border-gray-200 bg-gray-50  md:mt-4 '>
            <MaxWidthWrapper className='py-20'>
            <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
                     {content.map((content)=>(
                   <div className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'> 
                      <div className='md:flex-shrink-0 flex justify-center'>
                       <div className='h-16 w-16  flex items-center  justify-center rounded-full bg-blue-100'>
                          {content.icon}
                      </div>
                     </div>
                     <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                     <h3 className='text-base font-medium text-gray-900'>
                        {content.name}
                     </h3>
                     <p className='text-base font-medium text-gray-900'>
                      {content.description}
                     </p>
                     </div>

                   </div>
                     )
                )}
            </div>
            </MaxWidthWrapper>
            
          </section>
      </div>
    </MaxWidthWrapper>
  )
}
