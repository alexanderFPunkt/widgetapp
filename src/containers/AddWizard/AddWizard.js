import React, { Component } from "react";
import LanguageSelect from "../../components/AddWizard/LanguageSelect";
import NameSelect from "../../components/AddWizard/NameSelect";
import localStorage from "local-storage";
import cssClasses from "./AddWizard.module.css";

export default class AddWizard extends Component {
  state = {
    newWidget: { name: "", language: "" },
    phase: 0
  };

  onSelectLanguage(language) {
    console.log(language);
    this.setState({ newWidget: { name: "", language: language }, phase: 1 });
  }

  onSelectName(name) {
    console.log(name);
    let newWidget = { ...this.state.newWidget, name: name };

    let widgets = localStorage.get("widgets");
    if (widgets === null) {
      widgets = [newWidget];
    } else {
      widgets.push(newWidget);
    }
    localStorage.set("widgets", widgets);

    this.props.history.push("/overview");
  }

  render() {
    let content = null;
    if (this.state.phase === 0) {
      content = (
        <LanguageSelect clicked={language => this.onSelectLanguage(language)} />
      );
    } else if (this.state.phase === 1) {
      content = <NameSelect clicked={name => this.onSelectName(name)} />;
    }
    return <div className={cssClasses.AddWizard}>{content}</div>;
  }
}
