import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { inject, observer } from "mobx-react";
import viewerQuery from "./viewer.gql";

/**
 * withViewer higher order query component for getting the current viewer account
 * @name WithViewer
 * @param {React.Component} Component to decorate
 * @returns {React.Component} - Component with `viewer` prop
 */
export default (Component) => (
  @inject("authStore")
  @observer
  class WithViewer extends React.Component {
    static propTypes = {
      authStore: PropTypes.shape({
        setAccountId: PropTypes.func
      })
    }

    render() {
      const { authStore } = this.props;

      return (
        <Query query={viewerQuery}>
          {({ data }) => {
            if (data && data.viewer) {
              authStore.setAccountId(data.viewer._id);
            }

            return (
              <Component
                {...this.props}
                viewer={data && data.viewer}
              />
            );
          }}
        </Query>
      );
    }
  }
);
