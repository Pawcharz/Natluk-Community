// SCSS
import './SectionBase.scss'

const SectionBase = ({children, className='', customId=''}) => {
    return (
        <div id={customId} className={`section ${className}`}>
            <main className='section__main'>
                {children}
            </main>
        </div>
    )
}

export default SectionBase;