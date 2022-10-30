import Header from 'components/header'

function Layout({ children }) {
    return(
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
  