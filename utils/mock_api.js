
const CheckDistance = (dummy_data) => {
       const result = dummy_data.filter((item) => item.distance <= 3)
        return result;
};

export {CheckDistance};  