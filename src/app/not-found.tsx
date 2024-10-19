import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex w-full h-screen justify-center items-center'>
        <h1 className='text-xl font-bold'>Não encontrado</h1>
        <p className='text-gray-400'>Não encontramos essa página</p>
        <Link href={'www.google.com'}>Volte a home</Link>
    </div>
  )
}