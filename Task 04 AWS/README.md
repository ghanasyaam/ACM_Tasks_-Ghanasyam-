# Deploy a Web Application on AWS

This project involves deploying a portfolio website using AWS services like S3 for static hosting and EC2 for a React application. Due to cost considerations, Route 53 was not used for DNS management. The goal was to securely deploy a web application while following best practices for IAM roles and policies.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Requirements](#requirements)
- [Deployment Steps](#deployment-steps)
  - [1. Hosting the Portfolio Website on S3](#1-hosting-the-portfolio-website-on-s3)
  - [2. Deploying React App on EC2](#2-deploying-react-app-on-ec2)
- [Security Setup with IAM Roles and Policies](#security-setup-with-iam-roles-and-policies)
- [Future Improvements](#future-improvements)
- [Resources](#resources)
- [License](#license)

## Overview

This project demonstrates how to deploy and host a simple web application (a portfolio website) on AWS using **S3** for static content and **EC2** for hosting a React app. While Route 53 is commonly used for DNS management, it was not utilized here due to cost constraints. The following services were used in this deployment:

- **S3**: For static website hosting (portfolio).
- **EC2**: For hosting the dynamic React app.
- **IAM Roles & Policies**: For managing access and permissions to ensure security.

## Architecture

1. **Static Site on S3**: A static portfolio site is hosted using S3, making use of its cost-effective storage for static assets.
2. **React App on EC2**: A dynamic web application built using React is hosted on an EC2 instance.
3. **IAM Roles and Policies**: Used to securely manage access to AWS resources, ensuring that the application has only the permissions it needs.

### Link to Portfolio Site:

You can access the hosted portfolio site using the following link:

[https://syambucketacm.s3.eu-north-1.amazonaws.com/ACM+Tasks2/Index.html](https://syambucketacm.s3.eu-north-1.amazonaws.com/ACM+Tasks2/Index.html)

## Requirements

- **AWS Account**: Set up an account at [aws.amazon.com](https://aws.amazon.com/).
- **AWS CLI (Optional)**: For interacting with AWS from the command line.
- **IAM Roles and Policies**: To control access and security for AWS resources.
- **React Application**: A React project that you wish to host on EC2.
- **Domain Name (Optional)**: You may add a custom domain using Route 53 or another DNS service in the future.

## Deployment Steps

### 1. Hosting the Portfolio Website on S3

#### Steps:
1. **Create an S3 Bucket**:
   - Go to the S3 service in AWS.
   - Create a new bucket (e.g., `syambucketacm`) with **public access** to allow the static site to be viewed.
   
2. **Upload Portfolio Files**:
   - Upload your HTML, CSS, and other static assets (e.g., `index.html`) to the S3 bucket.
   
3. **Enable Static Website Hosting**:
   - Under **Properties** of the bucket, enable **Static Website Hosting**.
   - Specify the **Index Document** (e.g., `index.html`).
   
4. **Bucket Policy**:
   - Update the bucket's permissions to allow public access to the files by configuring the bucket policy:
     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         {
           "Effect": "Allow",
           "Principal": "*",
           "Action": "s3:GetObject",
           "Resource": "arn:aws:s3:::syambucketacm/*"
         }
       ]
     }
     ```
   
5. **Access the Site**:
   - The portfolio can now be accessed using the S3 URL:
     [https://syambucketacm.s3.eu-north-1.amazonaws.com/ACM+Tasks2/Index.html](https://syambucketacm.s3.eu-north-1.amazonaws.com/ACM+Tasks2/Index.html)

### 2. Deploying React App on EC2

#### Steps:

1. **Create an EC2 Instance**:
   - In the AWS EC2 Dashboard, launch an instance with the OS of your choice (e.g., Amazon Linux or Ubuntu).
   - Configure security groups to allow HTTP (port 80) and SSH (port 22) access.

2. **SSH into the EC2 Instance**:
   - Use SSH to connect to the instance:
     ```bash
     ssh -i /path/to/key.pem ec2-user@your-ec2-public-ip
     ```

3. **Install Node.js and NPM**:
   - Install Node.js and NPM on the instance:
     ```bash
     sudo yum install -y nodejs npm
     ```

4. **Deploy React App**:
   - Upload your React app files to the EC2 instance.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Build the app:
     ```bash
     npm run build
     ```
   - Serve the app using a web server (e.g., `serve` or Nginx).

5. **Access the React App**:
   - Visit the public IP of your EC2 instance to view the deployed React app.

## Security Setup with IAM Roles and Policies

To ensure that the application is secure, proper IAM roles and policies were implemented:

1. **S3 Bucket IAM Policies**:
   - The bucket was configured with a public-read policy to allow read access for the static website content, while write access is restricted.

2. **EC2 IAM Role**:
   - An IAM role was attached to the EC2 instance to limit access based on the principle of least privilege. This ensures the instance only has access to the resources it needs, such as retrieving files from S3 or interacting with CloudWatch.

### Example IAM Policy for EC2 Instance:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::syambucketacm/*"
    }
  ]
}
