
export const Section = (props) => {
    const {title, children} = props
    return (<>
        <section>
            <h2>{title}</h2>
            {children}
    </section>
    </>)   
}