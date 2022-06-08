import { Link, routes } from '@redwoodjs/router'
import type { Post } from 'types/graphql'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <p>{article.body}</p>
      <div>
        Posted at:&nbsp;
        {new Date(article.createdAt).toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          hour12: true,
          minute: 'numeric',
        })}
      </div>
    </article>
  )
}

export default Article
