# echo "Rebuilding image..."
# sudo docker stop resource-dashboard-v2
# sudo docker rm resource-dashboard-v2
# sudo docker rmi $(sudo docker images 'resource-dashboard-v2' -a -q)

# sudo docker build -t resource-dashboard-v2 .
# sudo docker save resource-dashboard-v2 > ./zip/resource-dashboard-v2.tar

# echo "Built success!"

echo "Rebuilding image..."
sudo docker stop resource-dashboard-v2
sudo docker rm resource-dashboard-v2
sudo docker rmi $(sudo docker images 'resource-dashboard-v2' -a -q)

sudo docker build -t resource-dashboard-v2 .
sudo docker save resource-dashboard-v2 > ./zip/resource-dashboard-v2.tar
cd zip
sudo docker load -i resource-dashboard-v2.tar
sudo docker compose up

echo "Built success!"
