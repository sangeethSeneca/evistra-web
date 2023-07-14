import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      {/* <h1>About Us</h1> */}
      <div style={styles.imageContainer}>
        <img src="/images/logo.png" alt="Company Logo" width="400px" height="400px" />
        <div>
          <p style={styles.moto}>Dedicated to providing high-quality products and services.</p>
          <p style={styles.textbody}>
            At our company, we strive to deliver excellence in everything we do. We
            value customer satisfaction and aim to build long-lasting relationships
            based on trust and reliability.
            <br /><br />
            Our dedicated team works tirelessly to ensure that our products/services
            meet the highest standards. We continuously innovate and improve to stay
            ahead in the industry and provide the best solutions to our customers.
          </p>
        </div>
      </div>
      <p style={styles.textail}>
        Thank you for visiting our website. We look forward to serving you!
      </p>
    </div>
  );
}

const styles = {
  container: {
    margin: "40px", // Adds 40px right and left spacing
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  moto: {
    fontSize: "40px",
    fontWeight: "bold",
    marginLeft: "20px",
  },
  textbody: {
    marginLeft: "20px",
    fontSize: "18px",
    display: "flex",
  },
  textail: {
    fontSize: "20px",
    fontWeight: "bold",
    display: "flex",
  },
};


export default AboutUs;