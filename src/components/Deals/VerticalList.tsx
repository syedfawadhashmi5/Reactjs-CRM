import React, { useState } from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import {
  Box,
  Modal,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Item, VerticalListProps, Column, Props } from "../../misc/types";
import DealsCard from "./DealsCard";
import ShowDeals from "./ShowDeals";

const VerticalList: React.FC<Props> = ({ listId, columns, items }) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <Droppable droppableId={listId}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "210px",
            }}
          >
            <div style={{ display: "flex" }}>
              {columns.map((column) => (
                <div
                  key={column.id}
                  style={{
                    flex: 1,
                    padding: 4,
                    textAlign: "center",
                    marginBottom: 0,
                  }}
                >
                  <Typography variant="subtitle1">{column.title}</Typography>
                </div>
              ))}
            </div>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    onClick={() => handleItemClick(item)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      userSelect: "none",
                      padding: 8,
                      margin: "0 0 8px 0",
                      minHeight: "50px",
                      backgroundColor: "#E0E0E0",
                      ...provided.draggableProps.style,
                    }}
                  >
                    <DealsCard
                      companyName={item.content}
                      imageUrl={item.image}
                      description={item.description}
                      revenue={item.revenue}
                      type={item.type}
                    />
                  </div>
                )}
              </Draggable>
            ))}
          </div>
          {provided.placeholder}
          {selectedItem && (
            <Modal open onClose={handleCloseModal}>
              <Box
                sx={{
                  position: "absolute" as "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 800,
                  maxHeight: "95vh",
                  overflowY: "auto",
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 1,
                }}
              >
                <ShowDeals />
              </Box>
            </Modal>
          )}
        </div>
      )}
    </Droppable>
  );
};

export default VerticalList;
