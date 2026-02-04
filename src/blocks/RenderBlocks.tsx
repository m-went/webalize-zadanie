import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'
import { CallToActionBlock } from './CallToAction/Component'
import { ContentBlock } from './Content/Component'
import { FormBlock } from './Form/Component'
import { MediaBlock } from './MediaBlock/Component'
import { ArchiveBlock } from './ArchiveBlock/Component'
import { BannerBlock } from './Banner/Component'
import { CodeBlock } from './Code/Component'
import { FaqBlock } from './Faq/Component'
import { RelatedPosts } from './RelatedPosts/Component'
import { FooterCompanyInfoBlock } from './Footer/FooterCompanyInfo/Component'
import { FooterLinksBlock } from './Footer/FooterLinks/Component'
import { FooterTimezonesBlock } from './Footer/FooterTimezones/Component'
import { PostHeaderBlock } from './Posts/PostHeader/Component'
import { PostImageBlock } from './Posts/PostImage/Component'
import { PostListBlock } from './Posts/PostList/Component'
import { PostQuoteBlock } from './Posts/PostQuote/Component'
import { PostTextBlock } from './Posts/PostText/Component'

const blockComponents = {
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  archiveBlock: ArchiveBlock,
  bannerBlock: BannerBlock,
  codeBlock: CodeBlock,
  faqBlock: FaqBlock,
  relatedPosts: RelatedPosts,
  footerCompanyInfoBlock: FooterCompanyInfoBlock,
  footerLinksBlock: FooterLinksBlock,
  footerTimezonesBlock: FooterTimezonesBlock,
  postHeaderBlock: PostHeaderBlock,
  postImageBlock: PostImageBlock,
  postListBlock: PostListBlock,
  postQuoteBlock: PostQuoteBlock,
  postTextBlock: PostTextBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
