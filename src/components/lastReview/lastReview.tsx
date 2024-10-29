import { mockMovies } from '@/mocks/data/mockMovies';
import Image from 'next/image';

export const LastReview = () => {
    return (
        <section className='flex mt-20 gap-6 justify-between'>
            <article className='flex flex-col gap-8'>
                <h1 className='text-3xl font-light font-genera text-defaultRed'>LAST REVIEWED</h1>
                <h1 className='text-6xl font-light font-neoplanta'>The Substance</h1>
            </article>
            <Image height={700} width={550} alt={mockMovies[0].title} src={mockMovies[9].posterUrl} className='border-8'></Image>
        </section>
    )
}