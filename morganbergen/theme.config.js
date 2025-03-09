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
 * new Date() constructs a new date object
 * getFullYear() returns the full year of the date
 * YEAR is assigned the value of the current year
 * 
 */
const YEAR = new Date().getFullYear();

/**
 * @description     footer component
 * @note            this component is used to display the footer of the blog
 * 
 * export default {}; makes all classes, functions, variables, or primitives within the object publicly available to be constructed by other modules.
 *
 * 
 */
export default {
  footer: (
    <footer align="right">
      <small>
        <time>{YEAR}</time> © Morgan Bergen
      </small>
      <style jsx>{`
         footer {
          margin-top: 8rem;
          position: fixed; 
          bottom: 0;       
          left: 0;         
          right: 0;        
          padding: 1rem;   
          background: transparent; 
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
};