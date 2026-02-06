import type { MDXComponents } from 'mdx/types'
import Accordion from './components/Accordion'
import Progress from './components/Progress'
import Link from 'next/link'
import PromisesTable from './components/PromisesTable'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Accordion: ({children, ...props}) => <Accordion {...props}>{children}</Accordion>,
    Link: ({ children, href, ...props }) => <Link href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</Link>,
    Progress: ({ children, ...props }) => <Progress {...props}>{children}</Progress>,
    PromisesTable: ({ children, ...props }) => <PromisesTable {...props}>{children}</PromisesTable>,
    ...components,
  }
}