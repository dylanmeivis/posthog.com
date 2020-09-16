import React from 'react'
import { Link } from 'gatsby'
import '../features.css'
import '../../components/Layout/Layout.css'
import Layout from '../../components/Layout'
// import { LeftOutlined, RightOutLined } from '@ant-design/icons'


function ProductFeatures() {
    return (
        <Layout>
            <div className="headWrapper">
                <Link to="/product-features">
                    {/* <LeftOutlined /> */}
                    <p>Back to Features</p>
                </Link>
                <div className="head">
                    <h1>Self Hosted</h1>
                </div>
                <Link to="/product-features">
                    <p>Next Feature</p>
                    {/* <RightOutLined /> */}
                </Link>
                
            </div>
            <div>
                <h2>Take control of your data</h2>
                <p>When you self-host, your data is all yours. This means your users’ data is not sent to any third-party, not even PostHog. The privacy of your users is preserved, and it is easier to comply with legislation such as GDPR and cookie laws.</p>
                <h2>Deploy in your own way</h2>
                <p>We strive to make our deployment process as simple as possible. As a result, we offer a wide variety of ways to deploy PostHog, so you can pick the one that suits you best. Additionally, it’s up to you where you deploy it! This gives you more freedom and prevents PostHog from disrupting your tech stack.</p>
                <h2>Perform powerful analytics your entire team can use</h2>
                <p>PostHog provides self-serve analytics for any Engineer or Product Manager. The interface is simple for any user - no data analysts needed. With PostHog, you have all the benefits of self-building plus the support of a world-class team ensuring you have all the features you need. In addition, by being open source, PostHog ensures that our tool is secure and battle-tested.</p>
            </div>
               
        </Layout>
    )
}

export default ProductFeatures;