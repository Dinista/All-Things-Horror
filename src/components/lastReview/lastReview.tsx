import { mockMovies } from '@/mocks/data/mockMovies';
import Image from 'next/image';

export const LastReview = () => {
    return (
        <section className='flex mt-20 gap-6 justify-between'>
            <article className='flex flex-col gap-8'>
                <h1 className='text-3xl font-light font-genera text-defaultRed'>LAST REVIEWED</h1>
                <h1 className='text-6xl font-light font-neoplanta'>{mockMovies[9].title}</h1>
                <p className='font-argentum leading-8 text-gray-400'>{mockMovies[9].synopsis} sadsasd dasdasdas dasdasdas dasd asdas Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Facilis, expedita unde
                    esse numquam inventore aspernatur dolorum error itaque ipsum! Quasi voluptatum
                    distinctio facilis! Voluptates repudiandae et eum illo omnis sit!</p>
                <span className='h-1 border-t-2 w-1/2' />
                <div className='flex gap-3'>
                    <article className='flex flex-col gap-4 w-1/2'>
                        <h1 className='font-neoplanta uppercase text-xl'>True horror that only a few people will be prepared</h1>
                        <p className='font-argentum font-light text-gray-400'>sadsasd dasdasdas dasdasdas dasd asdas Lorem,
                            ipsum dolor sit amet consectetur adipisicing elit. Facilis, expedita unde
                            esse numquam inventore aspernatur dolorum error itaque ipsum! Quasi voluptatum
                            distinctio facilis! Voluptates repudiandae et eum illo omnis sit!
                        </p>
                        <div className='font-neoplanta flex items-center gap-3'>
                            <span className='h-1 border-t-2 w-1/5'></span>
                            <p className='uppercase text-lg'>
                                Fabricío Lima
                            </p>
                        </div>
                    </article>
                    <article className='flex flex-col gap-4 w-1/2'>
                        <h1 className='font-neoplanta uppercase text-xl'>True horror that only a few people will be prepared</h1>
                        <p className='font-argentum font-light text-gray-400'>sadsasd dasdasdas dasdasdas dasd asdas Lorem,
                            ipsum dolor sit amet consectetur adipisicing elit. Facilis, expedita unde
                            esse numquam inventore aspernatur dolorum error itaque ipsum! Quasi voluptatum
                            distinctio facilis! Voluptates repudiandae et eum illo omnis sit!
                        </p>
                        <div className='font-neoplanta flex items-center gap-3'>
                            <span className='h-1 border-t-2 w-1/5'></span>
                            <p className='uppercase text-lg'>
                                Fabricío Lima
                            </p>
                        </div>
                    </article>
                </div>

            </article>
            <Image height={700} width={550} alt={mockMovies[0].title} src={mockMovies[9].posterUrl} className='border-8' />
        </section>
    )
}