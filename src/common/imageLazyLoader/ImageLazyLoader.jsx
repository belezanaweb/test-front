import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const transparentImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

const fadeInTimeDefault = 0.1;

class ImageLazyLoader extends PureComponent {

  imgRef = React.createRef();

  componentDidMount = () => {

    const {
      disableLazyLoad,
    } = this.props;

    if (!disableLazyLoad) {

      window.addEventListener('resize', this._loadMainImg);
      window.addEventListener('scroll', this._loadMainImg);

    }

  }

  componentWillUnmount = () => {

    const { disableLazyLoad } = this.props;

    if (!disableLazyLoad) {

      window.removeEventListener('resize', this._loadMainImg);
      window.removeEventListener('scroll', this._loadMainImg);

    }

  }

  _isAnyPartOfElementInViewport = (element) => {

    if (!element) return false;

    const rect = element.getBoundingClientRect();

    const vertInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= window.innerWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);

  }

  _loadMainImg = () => {

    const { current } = this.imgRef;
    const {
      disableLazyLoad,
      src,
      fadeInTime,
    } = this.props;

    if (!disableLazyLoad) {

      if (!this._isAnyPartOfElementInViewport(current)) return;

      window.removeEventListener('resize', this._loadMainImg);
      window.removeEventListener('scroll', this._loadMainImg);

    }

    const imageBuffer = new Image();
    imageBuffer.src = src;
    imageBuffer.onload = () => {

      current.src = imageBuffer.src;
      current.style.transition = `opacity ${fadeInTime}s ease-in-out`;
      current.style.opacity = 1;

    };

  }

  _onLoad = (e) => {

    const { onLoad } = this.props;
    const { src } = e.target;
    if (onLoad && src !== transparentImage) onLoad(e);

  }

  _onMouseMove = (e) => {

    const { onMouseMove } = this.props;
    const { src } = e.target;
    if (onMouseMove && src !== transparentImage) onMouseMove(e);

  }

  _onMouseLeave = (e) => {

    const { onMouseLeave } = this.props;
    const { src } = e.target;
    if (onMouseLeave && src !== transparentImage) onMouseLeave(e);

  }

  render() {

    const {
      className,
      style,
      width,
      height,
      alt,
    } = this.props;

    const actualSrc = transparentImage;

    setTimeout(() => this._loadMainImg(), 0);

    return (
      <img
        src={actualSrc}
        ref={this.imgRef}
        className={className}
        style={{ opacity: 0.1, ...style }}
        onLoad={this._onLoad}
        onMouseMove={this._onMouseMove}
        onMouseLeave={this._onMouseLeave}
        alt={alt}
        width={width}
        height={height}
      />
    );

  }

}

ImageLazyLoader.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onLoad: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseLeave: PropTypes.func,
  alt: PropTypes.string,
  fadeInTime: PropTypes.number,

  // DOC: componente que já usa lazy load (slider p.e.) deve chamar disableLazyLoad = true
  disableLazyLoad: PropTypes.bool,
};

ImageLazyLoader.defaultProps = {
  className: '',
  style: {},
  onLoad: null,
  onMouseMove: null,
  onMouseLeave: null,
  alt: '',
  width: null,
  height: null,
  fadeInTime: fadeInTimeDefault,
  disableLazyLoad: false,
};

export default ImageLazyLoader;
