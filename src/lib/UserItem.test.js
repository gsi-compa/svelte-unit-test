import UserItem from "./UserItem.svelte";
import { render, fireEvent, screen } from "@testing-library/svelte";

it("testing rendered content", () => {
  render(UserItem, {
    props: {
      index: 0,
      isOnlyItem: false,
      user: {
        firstName: "José Gabriel",
        lastName: "Companioni",
        isActive: true,
      },
    },
  });
  const userItemRoot = document.querySelector("li.user-item");
  const activeIndicator = userItemRoot.querySelector(
    "div.user-item__active-indicator"
  );
  const text = userItemRoot.querySelector("p.user-item__text");
  const buttonsContainer = userItemRoot.querySelector(
    "div.user-item__buttons-container"
  );
  expect(userItemRoot).toBeInTheDocument();
  expect(activeIndicator).toBeInTheDocument();
  expect(text).toBeInTheDocument();
  expect(buttonsContainer).toBeInTheDocument();
});

it("testing active indicator class depending on isActive property", async () => {
  const { component } = render(UserItem, {
    props: {
      index: 0,
      isOnlyItem: false,
      user: {
        firstName: "José Gabriel",
        lastName: "Companioni",
        isActive: true,
      },
    },
  });
  const userItemRoot = document.querySelector("li.user-item");
  const activeIndicator = userItemRoot.querySelector(
    "div.user-item__active-indicator"
  );
  expect(activeIndicator.classList.contains("is-active")).toBeTruthy();

  await component.$set({
    user: {
      firstName: "José Gabriel",
      lastName: "Companioni",
      isActive: false,
    },
  });

  const notActiveIndicator = userItemRoot.querySelector(
    "div.user-item__active-indicator"
  );
  expect(notActiveIndicator.classList.contains("is-active")).toBeFalsy();
});

it("testing rendered text", async () => {
  const { component } = render(UserItem, {
    props: {
      index: 0,
      isOnlyItem: false,
      user: {
        firstName: "José Gabriel",
        lastName: "Companioni",
        isActive: true,
      },
    },
  });
  screen.getByText("José Gabriel Companioni");

  await component.$set({
    user: {
      firstName: "Greta",
      lastName: "Companioni",
      isActive: false,
    },
  });

  screen.getByText("Greta Companioni");
});

it("testing button behavior", async () => {
  const { component } = render(UserItem, {
    props: {
      index: 0,
      isOnlyItem: false,
      user: {
        firstName: "José Gabriel",
        lastName: "Companioni",
        isActive: true,
      },
    },
  });

  const userItemRoot = document.querySelector("li.user-item");
  const deleteButton = userItemRoot.querySelector(
    "button.user-item__buttons-container--action-button"
  );
  expect(deleteButton.hasAttribute("disabled")).toBeFalsy();

  await component.$set({
    isOnlyItem: true,
  });
  expect(deleteButton.hasAttribute("disabled")).toBeTruthy();
});

it("testing delete event", async () => {
  const { component } = render(UserItem, {
    props: {
      index: 0,
      isOnlyItem: false,
      user: {
        firstName: "José Gabriel",
        lastName: "Companioni",
        isActive: true,
      },
    },
  });

  const userItemRoot = document.querySelector("li.user-item");
  const deleteButton = userItemRoot.querySelector(
    "button.user-item__buttons-container--action-button"
  );

  const mock = jest.fn();
  component.$on("delete", mock);
  fireEvent.click(deleteButton);
  expect(mock).toHaveBeenCalled();
});
