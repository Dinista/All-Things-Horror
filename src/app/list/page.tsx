import { ListMenu } from '@/components/listMenu/listMenu'
import { ReviewCard } from '@/components/reviewCard/reviewCard'
import { PageTemplate } from '@/templates/PageTemplate'
import { mockMovies } from '@/mocks/data/mockMovies'

import React from 'react'

export default function page() {
  return (
    <PageTemplate>
      <div>
        <nav className='flex flex-col gap-4'>
          <h1 className='uppercase text-2xl font-genera text-defaultRed'>
            Review List
          </h1>
          <ListMenu />
        </nav>
        <section className="flex flex-wrap gap-6 mt-6 justify-start">
          {mockMovies.map((movie, index) => (
            <ReviewCard
              key={index}
              title={movie.title}
              description={movie.synopsis}
              imageUrl={movie.posterUrl}
              href={''}
            />
          ))}
        </section>
      </div>
    </PageTemplate>
  )
}
