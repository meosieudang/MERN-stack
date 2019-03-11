import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { getItemsRequest, deleteItemRequest } from "../actions/itemAction";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItemsRequest();
  }

  onDelete = id => {
    this.props.deleteItemRequest(id);
  };

  render() {
    const { item } = this.props;
    return (
      <Container>
        <ListGroup>
          {item.map((item, index) => (
            <ListGroupItem key={index} onClick={() => this.onDelete(item._id)}>
              {item.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.item.items
  };
};

export default connect(
  mapStateToProps,
  { getItemsRequest, deleteItemRequest }
)(ShoppingList);
