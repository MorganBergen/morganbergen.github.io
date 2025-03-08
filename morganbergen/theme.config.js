/**
 * @file    theme.config.js
 * @date    sat mar 08 2025
 * @author  morganbergen
 * @brief   customize the front end appearance and metadata
 * @note    this file is required for the blog theme to work
 */

/**
 * @description     variable declaration
 * 
 * the datatype of YEAR is a constant - it's an immutable variable
 * new Date() 
 * 
 * 
 */
const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Your Name.
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
};