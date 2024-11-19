package com.backend.deliveryweb.logic;

import com.backend.deliveryweb.dao.StoreDao;
import com.backend.deliveryweb.vo.Menu;
import com.backend.deliveryweb.vo.Stores;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StoreLogic {

    @Autowired
    private StoreDao storeDao;

    /**
     * 이미지 업데이트
     *
     * @param file
     * @param menuId
     * @return
     */
    public String imageUpdate(MultipartFile file, String menuId) {

        Map<String, Object> image = new HashMap<>();

        String filename = null;
        String fullPath = null;
        double d_size = 0.0;
        if (!file.isEmpty()) {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
            Calendar time = Calendar.getInstance();
            filename = sdf.format(time.getTime()) + "-" + file.getOriginalFilename().replaceAll(" ", "_");

            String saveFolder = "D:\\bproject\\delivery_web\\src\\main\\webapp\\pds";
            fullPath = saveFolder + "\\" + filename;
            try {
                File files = new File(fullPath);
                byte[] bytes = file.getBytes();
                BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(files));
                bos.write(bytes);
                bos.close();
                d_size = Math.floor(files.length() / (1024.00) * 10) / 10;
                image.put("file_name", filename);
                image.put("file_url", fullPath);
                image.put("file_size", d_size);
                image.put("menu_id", menuId);

                int result = storeDao.imageUpdate(image);

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return "";
    }

    public int update(Stores stores) {
        return storeDao.update(stores);
    }


    public int register(Stores stores) {

        return storeDao.register(stores);
    }


    public List<Map<String, Object>> info(String userid) {

        return storeDao.info(userid);

    }


    public List<Map<String, Object>> detail(String storeid, String userid) {

        return storeDao.detail(storeid, userid);
    }


    public int menuRegister(Menu menu) {
        return storeDao.menuRegister(menu);
    }

    public List<Map<String, Object>> menuInfo(String storeid) {
        return storeDao.menuInfo(storeid);
    }

    public int menuUpdate(Menu menu) {
        return storeDao.menuUpdate(menu);
    }

    public List<Map<String, Object>> storeOrderList(String storeid) {
        return storeDao.storeOrderList(storeid);
    }

    @Transactional
    public int menuDelete(Map<String, Object> menuid) {
        int imageDelete = storeDao.menuImageDelete(menuid);
        return storeDao.menuDelete(menuid);
    }

    public int delete(Map<String, Object> storeid) {
        return storeDao.delete(storeid);
    }


    public String logoImage(MultipartFile file) {

        Map<String, Object> image = new HashMap<>();

        String filename = null;
        String fullPath = null;
        double d_size = 0.0;
        if (!file.isEmpty()) {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
            Calendar time = Calendar.getInstance();
            filename = sdf.format(time.getTime()) + "-" + file.getOriginalFilename().replaceAll(" ", "_");

            String saveFolder = "D:\\bproject\\delivery_web\\src\\main\\webapp\\pds";
            fullPath = saveFolder + "\\" + filename;
            try {
                File files = new File(fullPath);
                byte[] bytes = file.getBytes();
                BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(files));
                bos.write(bytes);
                bos.close();
                d_size = Math.floor(files.length() / (1024.00) * 10) / 10;
                image.put("file_name", filename);
                image.put("file_url", fullPath);
                image.put("file_size", d_size);

                int result = storeDao.logoImage(image);

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return "";
    }
}
