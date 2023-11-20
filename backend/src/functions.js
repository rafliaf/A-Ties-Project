

exports.getSumCost = (data) => {
    const sumCost = data.reduce((totalSum, room) => {
        const acRoomCost = room.ac.reduce((roomSum, ac) => { 
            return roomSum + ac.cost;
        }, 0);
        return totalSum + acRoomCost;
    }, 0);

    return sumCost;
};