import React, { useState } from "react";
import Header from "@/components/Header";
import DealsHeader from "@/components/Deals/DealsHeader";
import NewContact from "@/components/Contacts/NewContact";
import { DragDropContext } from "@hello-pangea/dnd";
import {
  Box,
  Modal,
  Typography,
  Autocomplete,
  Card,
  CardContent,
  CardMedia,
  TextField,
  FormControlLabel,
  FormControl,
  Switch,
  Button,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import SortIcon from "@mui/icons-material/Sort";
import InputAdornment from "@mui/material/InputAdornment";
import VerticalList from "../components/Deals/VerticalList";

export default function Deals() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [lists, setLists] = useState([
    {
      id: "list1",
      columns: [{ id: "column1", title: "Opportunity" }],
      items: [
        {
          id: "item1",
          content: "Item 1",
          description: "Description for Item 1",
          revenue: "$100",
          image: "/assets/images/0.png",
          type: "Finance",
        },
      ],
    },
    {
      id: "list2",
      columns: [{ id: "column2", title: "Proposal Sent" }],
      items: [
        {
          id: "item2",
          content: "Item 2",
          description: "Description for Item 2",
          revenue: "$100",
          image: "/assets/images/6.png",
          type: "Finance",
        },
      ],
    },
    {
      id: "list3",
      columns: [{ id: "column3", title: "In Negotiation" }],
      items: [
        {
          id: "item3",
          content: "Item 3",
          description: "Description for Item 3",
          revenue: "$100",
          image: "/assets/images/29.png",
          type: "Finance",
        },
      ],
    },
    {
      id: "list4",
      columns: [{ id: "column4", title: "Won" }],
      items: [
        {
          id: "item4",
          content: "Item 4",
          description: "Description for Item 4",
          revenue: "$100",
          image: "/assets/images/30.png",
          type: "Finance",
        },
      ],
    },
    {
      id: "list5",
      columns: [{ id: "column5", title: "Lost" }],
      items: [
        {
          id: "item5",
          content: "Item 5",
          description: "Description for Item 5",
          revenue: "$100",
          image: "/assets/images/32.png",
          type: "Finance",
        },
      ],
    },
    {
      id: "list6",
      columns: [{ id: "column6", title: "Delayed" }],
      items: [
        {
          id: "item6",
          content: "Item 6",
          description: "Description for Item 6",
          revenue: "$100",
          image: "/assets/images/33.png",
          type: "Finance",
        },
      ],
    },
  ]);

  const onDragEnd = (result: any) => {
    // Handle drag and drop logic here
    const { destination, source, draggableId } = result;

    // If there's no destination, do nothing
    if (!destination) {
      return;
    }

    // If the item was dropped back into its original position, do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceList = lists.find((list) => list.id === source.droppableId);
    const destinationList = lists.find(
      (list) => list.id === destination.droppableId
    );

    // If the item was dropped within the same list
    if (source.droppableId === destination.droppableId) {
      const newItems = Array.from(sourceList!.items);
      const [removed] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, removed);

      const updatedLists = lists.map((list) =>
        list.id === source.droppableId ? { ...list, items: newItems } : list
      );

      setLists(updatedLists);
    } else {
      // If the item was dropped into a different list
      const sourceItems = Array.from(sourceList!.items);
      const destinationItems = Array.from(destinationList!.items);
      const [removed] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, removed);

      const updatedLists = lists.map((list) => {
        if (list.id === source.droppableId) {
          return { ...list, items: sourceItems };
        }
        if (list.id === destination.droppableId) {
          return { ...list, items: destinationItems };
        }
        return list;
      });

      setLists(updatedLists);
    }
  };

  return (
    <div>
      <Header />
      <>
        <Box className="container mx-auto">
          <DealsHeader />
          <DragDropContext  onDragEnd={onDragEnd}>
            <div className="deals-parent" style={{ display: "flex" }}>
              {lists.map((list) => (
                <VerticalList
                  key={list.id}
                  listId={list.id}
                  columns={list.columns}
                  items={list.items}
                />
              ))}
            </div>
          </DragDropContext>
        </Box>
      </>
    </div>
  );
}
