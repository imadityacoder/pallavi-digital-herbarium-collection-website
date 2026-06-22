import { useEffect } from 'react'

export default function useDocumentTitle(title, description) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title

    let metaDesc = document.querySelector('meta[name="description"]')
    const prevDesc = metaDesc?.getAttribute('content') || ''

    if (description) {
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.name = 'description'
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', description)
    }

    return () => {
      document.title = prevTitle
      if (metaDesc && description) metaDesc.setAttribute('content', prevDesc)
    }
  }, [title, description])
}
