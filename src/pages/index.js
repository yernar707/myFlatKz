import * as React from "react"
import { Link, graphql, withPrefix } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick";

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import Second from "../components/second"
import Filter from "../components/filter"
import PostService from "../components/postService"
import Questions from "../components/questions"
import { Helmet } from "react-helmet"
import NumberFormat from 'react-number-format';

const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 1,
    variableWidth: true,
    arrows: true,
  }
  

const isBrowser = typeof window !== "undefined"

const HomePage = ({ data }) => {
    
    const houses = data.houses.nodes;
    const smi = data.smi.nodes;
    return (
        <Layout>
          <Seo title="MYFLAT.KZ" />
          <Intro></Intro>
          <Second></Second>
          <Filter></Filter>
          <div className="houses">
              <div className="body-back services-container">
                  <div className="service-row">
                      {houses.map(house => {
                          const { title, url, district, price_tenge, price_euro, image } = house.frontmatter;
                          const img = getImage(image);
                          return (
                              <div className="col-4 house-card" key={house.id}>
                                  <Link to={`/${url}`}>
                                      <div className="house-card-inner">
                                          <GatsbyImage className="house-img" src={image} image={img} alt={title} />
                                          <div className="house-card-text">
                                              <p className="house-card-title">{title}</p> 
                                              <NumberFormat 
                                                  value={price_euro} 
                                                  displayType={'text'} 
                                                  thousandSeparator={` `} 
                                                  suffix={`€`}
                                                  renderText={(value, props) => <p className="house-card-price euro-price" {...props}>{value}</p>}
                                              />
                                              <NumberFormat 
                                                  value={price_tenge} 
                                                  displayType={'text'} 
                                                  thousandSeparator={` `} 
                                                  suffix={`₸`}
                                                  renderText={(value, props) => <p className="house-card-price tenge-price" {...props}>{value}</p>}
                                              />
                                              <p className="house-card-district">{`${district}`}</p>
                                          </div>
                                      </div>
                                  </Link>
                              </div>
                          )
                      })}
                  </div>
              </div> 
              <div className="show-more">
                  <Link to="all-houses">
                      Показать еще...
                  </Link>
              </div> 
          </div>
          <PostService></PostService>
          <div className="smi">
            <div className="body-back services-container" style={{paddingBottom: 0,}}>
                    <div className="paragraph-title">
                        <p>СМИ о нас</p>
                    </div>
                    <div className="smi-text">
                        <p>
                            Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах
                        </p>
                    </div>
                    <Slider {...settings} className="overflow-hidden">
                        {smi.map(elem => {
                          const { text, url, portal, image } = elem.frontmatter;
                          const img = getImage(image);
                          return (
                              <div className="slider-container" key={elem.id}>
                                  <div className="slider-inner container">
                                    <StaticImage
                                        src="../images/Group 311.png"
                                        width={57}
                                        quality={100}
                                        formats={["auto", "webp", "avif"]}
                                        alt="A Gatsby astronaut"
                                        style={{ marginBottom: `1.45rem`, position: `absolute`, top: 20 }}
                                    />
                                      <div className="service-row">
                                        <div className="col-7">
                                            <p className="slider-text">
                                                {elem.frontmatter.text}
                                            </p>
                                            <p className="slider-portal">
                                                - Портал "{portal}"
                                            </p>
                                            <a href="{`/${url}`}">Перейти</a>
                                        </div>
                                        <div>
                                            <GatsbyImage className="slider-img" image={img} alt={text} />
                                        </div>
                                      </div>
                                  </div>
                              </div>
                          )
                      })}
                    </Slider>
                </div>
          </div>
          <Questions></Questions>
          <Helmet>
            <script src={withPrefix('script.js')} type="text/javascript" />
          </Helmet> 
        </Layout>
    )
}

export default HomePage


export const query = graphql `
    query HouseQuery{
        houses: allMarkdownRemark (filter: {frontmatter: {type: {eq: "house"}}}, limit: 6 ) {
            nodes {
                frontmatter {
                    url
                    title
                    rooms
                    price_tenge
                    price_euro
                    district
                    image {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, formats: [AUTO])
                        }
                    }
                }
                id
            }
        }
        
        smi: allMarkdownRemark(filter: {frontmatter: {type: {eq: "smi"}}}) {
            nodes {
                frontmatter {
                    image {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    url
                    text
                    portal
                }
                id
            }
        }
    }
`
