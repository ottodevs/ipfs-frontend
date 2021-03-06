import React from "react";
import { Field } from "redux-form";
import { List, Button, Card, Menu } from "semantic-ui-react";
import NumberInput from "../molecules/NumberInput";

const participationTypeSelector = ({ input: { onChange, value } }) => (
  <div>
    <Menu text style={{ display: "flex", justifyContent: "center" }}>
      <Menu.Item
        name="Invest"
        active={value === "Invest"}
        onClick={() => onChange("Invest")}
      />
      <div style={{ marginTop: "0.7em" }}>|</div>
      <Menu.Item
        name="Redeem"
        active={value === "Redeem"}
        onClick={() => onChange("Redeem")}
      />
    </Menu>
  </div>
);

const ParticipationForm = ({ setup, handleSubmit, displayNumber }) => (
  <Card id="participation" centered>
    <Card.Content>
      <Card.Header>Participation</Card.Header>
      <form onSubmit={handleSubmit} name="participation">
        {setup ? null : (
          <Field name="type" component={participationTypeSelector} />
        )}
        <List>
          <List.Item>
            <List.Content>
              <Field
                label="Quantity"
                name="amount"
                component={NumberInput}
                type="number"
                format={displayNumber}
              />
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <Field
                label="Price"
                name="price"
                component={NumberInput}
                type="number"
                format={displayNumber}
                disabled
              />
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <Field
                label="Total"
                name="total"
                component={NumberInput}
                format={displayNumber}
                type="number"
              />
            </List.Content>
          </List.Item>
        </List>

        <Button basic color="black" style={{ width: "100%" }}>
          Submit request
        </Button>
      </form>
    </Card.Content>
  </Card>
);

export default ParticipationForm;
