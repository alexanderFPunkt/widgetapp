import React, { Component } from "react";
import localStorage from "local-storage";

import Modal from "../../components/UI/Modal/Modal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Widget from "../../components/Widget/Widget";
import AddWidget from "../../components/AddWidget/AddWidget";

import cssClasses from "./Overview.module.css";

class Overview extends Component {
  state = {
    toDelete: [],
    modalIsOpen: false,
    confirmDelete: false,
    addWizard: false,
    widgets: [
      { name: "Alex", language: "germany" },
      { name: "Lisa", language: "brit" },
      { name: "Ahmed", language: "Turkey" }
    ]
  };

  componentDidMount() {
    let widgets = localStorage.get("widgets");
    this.setState({
      ...this.state,
      widgets: widgets
    });
  }

  /*
  onAddedHandler = (name, language) => {
    const newWidget = {
      name: name,
      language: language
    };
    this.setState({
      ...this.state,
      widgets: this.state.widgets.concat(newWidget)
    });
  };
  */

  showDeleteModal = (name, language) => {
    this.setState({
      ...this.state,
      widgets: [...this.state.widgets],
      toDelete: [name, language],
      modalIsOpen: true,
      confirmDelete: true,
      addWizard: false
    });
  };

  showModal = () => {
    this.setState({
      ...this.state,
      widgets: [...this.state.widgets],
      modalIsOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      ...this.state,
      widgets: [...this.state.widgets],
      toDelete: [],
      modalIsOpen: false,
      confirmDelete: false,
      addWizard: false
    });
  };

  onDeleteHandler = (name, language) => {
    localStorage.set(
      "widgets",
      this.state.widgets.filter(
        widget => widget.name !== name && widget.language !== language
      )
    );

    this.setState({
      ...this.state,
      toDelete: [],
      modalIsOpen: false,
      confirmDelete: false,
      addWizard: false,
      widgets: this.state.widgets.filter(
        widget => widget.name !== name && widget.language !== language
      )
    });
  };

  render() {
    //contents od modal
    //delete Process
    let modalContents = null;
    if (this.state.modalIsOpen && this.state.confirmDelete) {
      modalContents = (
        <div>
          <p> Do you really want to delete</p>
          <button
            onClick={event =>
              this.onDeleteHandler(
                this.state.toDelete[0],
                this.state.toDelete[1]
              )
            }
          >
            yes
          </button>
        </div>
      );
    }

    //widgets
    let widgetList = null;
    if (this.state.widgets !== null) {
      widgetList = this.state.widgets.map(widget => (
        <Widget
          key={widget.name + widget.language}
          name={widget.name}
          language={widget.language}
          clicked={event => this.showDeleteModal(widget.name, widget.language)}
        />
      ));
    }

    return (
      <div className={cssClasses.Overview}>
        <Modal show={this.state.modalIsOpen} modalClosed={this.closeModal}>
          {modalContents}
        </Modal>
        <Backdrop show={this.state.modalIsOpen} clicked={this.closeModal} />
        {widgetList}
        <AddWidget />
      </div>
    );
  }
}

export default Overview;
