import React from "react";

const AboutUs = () => {
  return (
    <div data-testid="description-x" style={styles.container}>
      <div data-testid="description" style={styles.imageContainer}>
        <img src="/images/logo.png" alt="Company Logo" width="400px" height="400px" />
        <div data-testid="description-1">
          <p style={styles.moto}>Dedicated to providing high-quality products and services.</p>
          <p data-testid="description-1" style={styles.textbody}>
            At our company, we strive to deliver excellence in everything we do. We
            value customer satisfaction and aim to build long-lasting relationships
            based on trust and reliability.
          </p>
          <p data-testid="description-2" style={styles.textbody}>
            Our dedicated team works tirelessly to ensure that our products/services
            meet the highest standards. We continuously innovate and improve to stay
            ahead in the industry and provide the best solutions to our customers.
          </p>
        </div>
      </div>
      <p data-testid="thank-you" style={styles.textail}>
        Thank you for visiting our website. We look forward to serving you!
      </p>
    </div>
  );
}

const styles = {
  container: {
    margin: "40px", // Adds 40px right and left spacing
    height: "85vh"
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
    marginLeft: "30px",
    margin: "30px",
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