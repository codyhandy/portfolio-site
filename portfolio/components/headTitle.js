import Head from 'next/head'

const HeadTitle = ({ title }) => {
    
    if (title) {
        title = 'Cody Handy | ' + `${title}`;
    }
    else {
        title = 'Cody Handy';
    }

    return(
        <Head>
            <title>{ title }</title>
        </Head>
    )
    
}

export default HeadTitle;