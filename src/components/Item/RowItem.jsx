import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Price from 'components/Price';

const StyledItem = styled.div`
    color: #fff;
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    margin: 6px 4px;
    height: 250px;
    background-color: #fff;

    &:hover {
        box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    }
`;

const ImageWrapper = styled.div`
    flex: 0 0 30%;
    background-color: #eee;
    position: relative;
    background-image: url(/${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
`;

const MetaData = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
`;

const ItemName = styled.div`
    font-size: 26px;
    color: #666;
`;

const CenterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
`;

export default class RowItem extends Component {
    static defaultProps = {
        item: {
            id: 0,
            name: 'Unknown',
            image: '/paper.jpeg',
            price: 0,
        },
    };

    static propTypes = {
        item: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {};
        this.state.item = this.props.item;
    }

    render() {
        const { id, name, image, price } = this.state.item;

        return (
            <StyledItem>
                <ImageWrapper
                    image={image}
                />
                <MetaData>
                    <CenterContent>
                        <ItemName>{name}</ItemName>
                    </CenterContent>
                    <CenterContent>
                        <Price amount={price}/>
                    </CenterContent>
                </MetaData>
            </StyledItem>
        );
    }
}
