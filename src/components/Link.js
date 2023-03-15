import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import * as styles from "../utils/styles"

const HASH_PATTERN = /^#.*/
const isHashLink = to => HASH_PATTERN.test(to)

const ExternalLink = styled.a`
  color: ${styles.colorBlueLight};
  text-decoration: none;
  font-weight: 500;
  opacity: 1;
  outline: none;

  &:hover {
    text-decoration: none;
    color: ${styles.colorBlue};
  }
`

const InternalLink = styled(GatsbyLink)`
  color: ${styles.colorBlueLight};
  text-decoration: none;
  font-weight: 500;
  opacity: 1;
  outline: none;

  &:hover {
    text-decoration: none;
    color: ${styles.colorBlue};
  }

  &.active {
    color: ${styles.colorBlue};
  }
`

const Link = ({ to, href, children, className, active, isPartiallyActive = true }) => {
  // markdown pages pass `href`, not `to`
  to = to || href
  className = active ? `active ${className}` : className;

  const isExternal = to.includes("http") || to.includes("mailto:")
  const isHash = isHashLink(to)

  // Must use <a> tags for anchor links
  // Otherwise <Link> functionality will navigate to homepage
  // See https://github.com/gatsbyjs/gatsby/issues/21909
  if (isHash) {
    return (
      <a className={className} href={to}>
        {children}
      </a>
    )
  }

  if (isExternal) {
    return (
      <ExternalLink
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </ExternalLink>
    )
  }

  return (
    <InternalLink
      className={className}
      to={to}
      activeClassName="active"
      partiallyActive={isPartiallyActive}
    >
      {children}
    </InternalLink>
  )
}

export default Link
