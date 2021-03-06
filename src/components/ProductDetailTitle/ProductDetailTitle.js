import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

/**
 * Product detail title and pageTitle (subtitle)
 * @class ProductDetailTitle
 */
class ProductDetailTitle extends Component {
  static propTypes = {
    /**
     * Subtitle
     */
    pageTitle: PropTypes.string,

    /**
     * Main title, the h1 for the page
     */
    title: PropTypes.string
  }
  render() {
    const { title, pageTitle } = this.props;

    // Render nothing if neither the title nor pageTitle exists
    if (!title && !pageTitle) return null;

    return (
      <Grid item sm={12}>
        {title && <Typography gutterBottom={true} variant="display2">{title}</Typography>}
        {pageTitle && <Typography color="primary" component="h2" variant="title">{pageTitle}</Typography>}
      </Grid>
    );
  }
}

export default ProductDetailTitle;
