import { CSSProperties } from 'react'

const Header = () => {

    const headerStyles: CSSProperties = {
        "height": "10%"
    }

  return (
    <header style={headerStyles}>
        <h2>Set Relation Determinator</h2>
    </header>
  )
}

export default Header