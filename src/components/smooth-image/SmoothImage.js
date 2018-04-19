import React from "react";
import PropTypes from "prop-types";

const proptypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  placeholderImgUrl: PropTypes.string,
  containerStyles: PropTypes.object.isRequired,
  transitionTime: PropTypes.number.isRequired,
  transitionTimingFunction: PropTypes.string.isRequired
};

const defaultProps = {
  containerStyles: {},
  transitionTime: 0.3,
  transitionTimingFunction: "ease-in"
};

export default class SmoothImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: {}
    };

    this.imageLoadHandler = this.imageLoadHandler.bind(this);
  }

  imageLoadHandler() {
    const { transitionTime, transitionTimingFunction } = this.props;
    this.setState({
      loaded: {
        opacity: "1",
        transitionProperty: "opacity",
        transitionDuration: `${transitionTime}s`,
        transitionTimingFunction
      }
    });
  }

  render() {
    const { placeholderImgUrl, containerStyles } = this.props;
    const bgImage = placeholderImgUrl && `url(${placeholderImgUrl})`;
    const { loaded } = this.state;

    return (
      <div
        style={Object.assign(
          {},
          {
            position: "relative",
            width: "100%",
            height: 0,
            opacity: 0,
            overflow: "hidden",
            backgroundImage: bgImage,
            // if you do not want square images, overwrite the paddingBottom % by passing from containerStyles
            paddingBottom: "100%",
            backgroundSize: "cover"
          },
          containerStyles,
          loaded
        )}
      >
        <img
          src={this.props.src}
          alt={this.props.alt}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%"
          }}
          onLoad={this.imageLoadHandler}
        />
      </div>
    );
  }
}

SmoothImage.propTypes = proptypes;
SmoothImage.defaultProps = defaultProps;
