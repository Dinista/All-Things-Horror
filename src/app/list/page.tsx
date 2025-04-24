import { ListMenu } from '@/components/listMenu/listMenu'
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
          <ListMenu />
          <ReviewCard />
        </section>
      </div>
    </PageTemplate>
  )
}
