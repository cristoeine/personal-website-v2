import { graphql } from "gatsby"
import * as React from "react"
import { NavBar } from "./navbar"

const pageStyles = {
  color: "white",
  padding: 96,
  paddingLeft: 200,
  paddingBottom: 200,
  fontFamily: "Inter, sans-serif",
}
const headingStyles = {
  marginTop: 0,
  color: "#F0DDBC",
  fontSize: "xx-large",
}
const paragraphStyles = {
  maxWidth: 520,
}
const paragraphAccentStyles = {
  color: "#F0DDBC",
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const IndexPage = (query) => {
  // console.log(query.data.introJson.name)
  return (
    <div style={pageStyles}>
      {/* <NavBar /> */}
      <p style={paragraphStyles}>Hi, I am</p>
      <br />
      <h2 style={headingStyles}>{query.data.introJson.name}</h2>
      <br />
      <p style={paragraphStyles}>{query.data.introJson.desc}<b style={paragraphAccentStyles}>{query.data.introJson.interest}</b></p>

    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>

export const data = graphql`
  {
    introJson{
      name
      desc
      interest
    }
  }
`