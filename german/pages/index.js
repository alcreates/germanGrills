import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Layout,{ siteTitle }  from '../components/layouts/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.splashContainer}>
        <div className={styles.splashImgContainer}>
        
          <Image
                priority
                src="/images/grill.jpg"
                layout="fill"
              />
            <div className={styles.splashText}> 
                
            </div>
      
        </div>

        <div className={styles.rightSide}> 
          
            <div className={styles.bio}>
              <div className={styles.bioHeader}>
                  <div>
                    <Image 
                      src="/images/german_new.jpg"
                      height={200}
                      width={200}
                      className={utilStyles.borderCircle}
                    />
                  </div>
                  <div>
                      <h1 >
                      Trustworthy,<br/>
                      Honest<br/>
                      &amp; Reliable Service
                    </h1>
                  </div>
              </div>
              <br/>
              <p>
              German Pinzon, more commonly known as “the grill guy” has been working with grills for over 15 years.  He started cleaning grills about 14 years ago and has built a reputation in the area ever since. Our small business has grown solely based on word of mouth, through our countless satisfied customers. 
              We look forward to making your grill look as good as new!
              </p>
              
              <br/>
              <h3>
                We look forward to making your grill look as good as new!
              </h3> 
              <h4>
                Contact via text or call (908) 361 9066
              </h4>
            </div>
        </div>
      </div>
      <div>
        <h1> Our Services</h1>
      </div>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceLeft}>
        

        </div>
        <div className={styles.serviceRight}>
            <Image 
                 src="/images/before.jpeg"
                 height={200}
                 width={200}
              />
             
              <Image 
                 src="/images/after.jpeg"
                 height={200}
                 width={200}
              />
        </div>
        </div>
    </Layout>
  )
}
