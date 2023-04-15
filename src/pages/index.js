import { graphql, Link } from "gatsby"
import * as React from "react"

const web = {
  color: "white",
  fontFamily: "Inter, sans-serif",
}
const pageStyles = {
  padding: 96,
  paddingLeft: 200,
  paddingBottom: 200,
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
const section = {
  marginTop: 120,
  marginBottom: 280
}
const navbar = {
  
}

const IndexPage = (query) => {
  console.log(query)
  return (
    <div style={web}>
      {/* <NavBar /> */}
      <div>
        <h4>Cristoeine</h4>
        <div className="links">
          <Link to="/">About</Link>
          <Link to="/">Experience</Link>
          <Link to="/">Work</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
      <div style={pageStyles}>
        {/* section 1 */}
        <div style={section}>
          <p style={paragraphStyles}>Hi, I am</p>
          <br />
          <h2 style={headingStyles}>{query.data.introJson.name}</h2>
          <p style={paragraphStyles}>{query.data.introJson.desc}<b style={paragraphAccentStyles}>{query.data.introJson.interest}</b></p>
        </div>

        {/* section 2 */}
        <div style={section}>
          <p>{query.data.aboutJson.bio}</p>
        </div>
      </div>
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
    aboutJson{
      bio
    }
  }
`