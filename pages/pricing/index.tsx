
import Link from 'next/link';
import { DarkLayout } from '../../components/layouts/DarkLayout';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function PricingPage() {
  return (
   
    <>
       
      <h1> Pricing page</h1>
      
      <h1 className={'title'}> 
        Ir a <Link href="/"><a>Home</a></Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing/index.js</code>
      </p>

     </>
  )
}

PricingPage.getLayout = function getLayout(page: JSX.Element){

  return (
    <MainLayout>
        { page }
    </MainLayout>
  )

} 
