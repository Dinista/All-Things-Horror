import { ReviewCard } from '@/components/reviewCard/reviewCard'
import { PageTemplate } from '@/templates/PageTemplate'
import React from 'react'

export default function page() {
  return (
    <PageTemplate>
      <div>
        <h1 className='uppercase text-2xl font-genera text-defaultRed'>
          Review List
        </h1>
        <section>
          <ReviewCard />
        </section>
      </div>
    </PageTemplate>
  )
}
